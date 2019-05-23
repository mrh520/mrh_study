/*
创建表
*/
CREATE TABLE pseudohash(
id int  not NULL Auto_increment,
url VARCHAR(255) not NULL,
url_crc int NOT NULL,
PRIMARY KEY(id)
);
/*
*创建触发器
*/
CREATE TRIGGER pseudopush_crc_ins BEFORE INSERT ON pseudopush FOR 
EACH ROW BEGIN
SET New.url_crc=crc32(New.url);
END;

CREATE TRIGGER pseudopush_crc_upd BEFORE UPDATE ON pseudopush FOR EACH ROW BEGIN
  SET NEW.url_crc=crc32(New.url);
END;


