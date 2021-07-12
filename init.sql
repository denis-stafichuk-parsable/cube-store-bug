create table if not exists jobs
(
    id           uuid    not null primary key,
    title        varchar not null,
    job_type     integer not null,
    created_at   bigint  not null,
    completed_at bigint  not null,
    team_id      uuid    not null
);

insert into jobs (id, title, job_type, created_at, completed_at, team_id) values ('331ad603-61c2-43a3-86b8-a7fdf31d2994', 'First job', 0, 1625323624, 0, 'e7c20a7a-ec4d-44ad-ad2c-45347823d579');
insert into jobs (id, title, job_type, created_at, completed_at, team_id) values ('2f9421c4-74a0-436a-8ac6-b9abda15de05', 'Second job', 0, 1625423624, 1625428624, 'e7c20a7a-ec4d-44ad-ad2c-45347823d579');
insert into jobs (id, title, job_type, created_at, completed_at, team_id) values ('6a025765-20b0-42c4-a059-2584f0d9e3d8', 'Third job', 0, 1625128624, 0, 'e7c20a7a-ec4d-44ad-ad2c-45347823d579');
insert into jobs (id, title, job_type, created_at, completed_at, team_id) values ('a9c87a23-1f6d-4104-8331-36670f1bd763', 'Test job', 0, 1625128729, 0, '6104ce9d-933d-4c15-a066-ed17a97d6643');