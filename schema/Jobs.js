cube(`Jobs`, {
  sql: `SELECT * FROM public.jobs`,
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primaryKey: true
    },

    createdAt: {
      type: `time`,
      sql: `(to_timestamp(created_at) AT TIME ZONE 'UTC')`
    },
    
    title: {
      sql: `title`,
      type: `string`
    },
    
    teamId: {
      sql: `team_id`,
      type: `string`
    },
  },
  
  dataSource: `default`
});
