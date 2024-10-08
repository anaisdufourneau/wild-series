create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null
);

create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  user_id int unsigned not null,
  foreign key(user_id) references user(id)
);
CREATE table category (
 id int unsigned primary key auto_increment not null,
  name varchar(255) not null unique
);
create table program (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  synopsis text not null,
  poster VARCHAR(255) not null,
  country VARCHAR(100) not null,
  year int not null,
  category_id INT unsigned not null,
  foreign key(category_id) references category(id)
);


-- alter table program add foreign key(category_id) references category(id);
