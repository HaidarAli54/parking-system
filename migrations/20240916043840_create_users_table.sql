-- migrate:up
CREATE TABLE users (
  id int(11) NOT NULL AUTO_INCREMENT,
  email varchar(255) DEFAULT NULL,
  fullname varchar(255) DEFAULT NULL,
  password varchar(255) DEFAULT NULL,
  phone_number varchar(20) DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY email (email),
  created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at timestamp NULL DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE parkirs (
    id int(11) NOT NULL AUTO_INCREMENT,
    user_id int(11) NOT NULL,
    duration int(11) NOT NULL,
    total int(11) NOT NULL,
    nopol varchar(255) NOT NULL,
    created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at timestamp NULL DEFAULT NULL,
    PRIMARY KEY (id),
    KEY user_id (user_id),
    CONSTRAINT parkirs_ibfk_1 FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE
)
-- migrate:down

DROP TABLE users;
DROP TABLE parkirs;

