create sequence cars_seq
    as integer;

alter sequence cars_seq owner to auracar;

create sequence countdown_seq
    as integer;

alter sequence countdown_seq owner to auracar;

create table car
(
    id              integer default nextval('cars_seq'::regclass) not null
        constraint car_pk
            primary key,
    model           varchar                                       not null,
    carregistration varchar                                       not null,
    entry           timestamp                                     not null,
    exit            timestamp                                     not null,
    active          boolean                                       not null,
    adviser         varchar
);

alter table car
    owner to auracar;

alter sequence cars_seq owned by car.id;

