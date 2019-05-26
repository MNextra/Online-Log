create database final default character set utf8 collate utf8_unicode_ci;
use final;

create table users(
	id integer auto_increment primary key,
	uname varchar(50),
	password varchar(50),
	uemail varchar(50),
	role varchar(50),
	create_at timestamp
);

create table logs(
	id integer auto_increment primary key,
	user_email varchar(100),
	content varchar(10000),
	create_on timestamp
);

insert into users(uname,password,uemail,role) values("Admin","Wzy02130.0","wangzu@phpstudywzy.xyz","Admin");
