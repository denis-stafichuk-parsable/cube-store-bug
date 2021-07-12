const Funnels = require(`Funnels`);

cube(`JobFunnel`, {
  joins: {
    Jobs: {
      relationship: `belongsTo`,
      sql: `${CUBE}.user_id = ${Jobs}.id`
    }
  },

  extends: Funnels.eventFunnel({
    userId: {
      sql: `id`
    },
    time: {
      sql: `(to_timestamp(created_at) AT TIME ZONE 'UTC')`
    },
    steps: [{
      name: `Scheduled`,
      eventsView: {
        sql: `select id, created_at from public.jobs where job_type = 0`
      }
    }, {
      name: `Done`,
      eventsView: {
        sql: `select id, created_at from public.jobs where job_type = 0 and completed_at > 0`
      }
    }]
  }),

  preAggregations: {
    jobCohorts: {
      measureReferences: [JobFunnel.conversions],
      dimensionReferences: [JobFunnel.step, Jobs.teamId],
      timeDimensionReference: JobFunnel.time,
      granularity: `day`,
      external: false,
    }
  }
});
