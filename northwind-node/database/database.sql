DROP DATABASE   /*!32312 IF EXISTS*/ Northwind;

CREATE DATABASE Northwind  CHAR SET utf8 COLLATE utf8_bin ;

USE Northwind;

CREATE TABLE Category (
  categoryId INT AUTO_INCREMENT NOT NULL
  ,categoryName VARCHAR(15) NOT NULL
  ,description TEXT NULL
  ,picture BLOB NULL
  ,PRIMARY KEY (categoryId)
  ) ENGINE=INNODB;

CREATE TABLE Region (
  regionId INT NOT NULL
  ,regiondescription VARCHAR(50) NOT NULL
  ,PRIMARY KEY (regionId)
  ) ENGINE=INNODB;


CREATE TABLE Territory (
  territoryId VARCHAR(20) NOT NULL
  ,territorydescription VARCHAR(50) NOT NULL
  ,regionId INT NOT NULL
  ,PRIMARY KEY (territoryId)
  ,FOREIGN KEY (regionId)
      REFERENCES Region(regionId)
  ) ENGINE=INNODB;

CREATE TABLE CustomerDemographics (
  customerTypeId INT AUTO_INCREMENT NOT NULL
  ,customerDesc TEXT NULL
  ,PRIMARY KEY (customerTypeId)
  ) ENGINE=INNODB;

CREATE TABLE Customer (
  custId INT AUTO_INCREMENT NOT NULL
  ,companyName VARCHAR(40) NOT NULL
  ,contactName VARCHAR(30) NULL
  ,contactTitle VARCHAR(30) NULL
  ,address VARCHAR(60) NULL
  ,city VARCHAR(15) NULL
  ,region VARCHAR(15) NULL
  ,postalCode VARCHAR(10) NULL
  ,country VARCHAR(15) NULL
  ,phone VARCHAR(24) NULL
  ,mobile VARCHAR(24) NULL
  ,email VARCHAR(225) NULL
  ,fax VARCHAR(24) NULL
  ,PRIMARY KEY (custId)
  ) ENGINE=INNODB;

CREATE TABLE CustCustDemographics (
  custId INT NOT NULL
  ,customerTypeId INT NOT NULL
  ,PRIMARY KEY (custId, customerTypeId)
    ,FOREIGN KEY (custId)
      REFERENCES Customer(custId)
    ,FOREIGN KEY (customerTypeId)
      REFERENCES CustomerDemographics(customerTypeId)
  ) ENGINE=INNODB;

CREATE TABLE Employee (
  employeeId INT AUTO_INCREMENT NOT NULL
  ,lastname VARCHAR(20) NOT NULL
  ,firstname VARCHAR(10) NOT NULL
  ,title VARCHAR(30) NULL
  ,titleOfCourtesy VARCHAR(25) NULL
  ,birthDate DATETIME NULL
  ,hireDate DATETIME NULL
  ,address VARCHAR(60) NULL
  ,city VARCHAR(15) NULL
  ,region VARCHAR(15) NULL
  ,postalCode VARCHAR(10) NULL
  ,country VARCHAR(15) NULL
  ,phone VARCHAR(24) NULL
  ,extension VARCHAR(4) NULL
  ,mobile VARCHAR(24) NULL
  ,email VARCHAR(225) NULL
  ,photo BLOB NULL
  ,notes BLOB NULL
  ,mgrId INT NULL
  ,photoPath VARCHAR(255) NULL
  ,PRIMARY KEY (employeeId)
  ) ENGINE=INNODB;

CREATE TABLE EmployeeTerritory (
  employeeId  INT AUTO_INCREMENT NOT NULL
  ,territoryId VARCHAR(20) NOT NULL
  ,PRIMARY KEY (employeeId, territoryId)
  ,FOREIGN KEY (employeeId)
      REFERENCES Employee(employeeId)
  ,FOREIGN KEY (territoryId)
      REFERENCES Territory(territoryId)
  ) ENGINE=INNODB;

CREATE TABLE Supplier (
  supplierId INT AUTO_INCREMENT NOT NULL
  ,companyName VARCHAR(40) NOT NULL
  ,contactName VARCHAR(30) NULL
  ,contactTitle VARCHAR(30) NULL
  ,address VARCHAR(60) NULL
  ,city VARCHAR(15) NULL
  ,region VARCHAR(15) NULL
  ,postalCode VARCHAR(10) NULL
  ,country VARCHAR(15) NULL
  ,phone VARCHAR(24) NULL
  ,email VARCHAR(225) NULL
  ,fax VARCHAR(24) NULL
  ,HomePage TEXT NULL
  ,PRIMARY KEY (supplierId)
  ) ENGINE=INNODB;

CREATE TABLE Product (
  productId INT AUTO_INCREMENT NOT NULL
  ,productName VARCHAR(40) NOT NULL
  ,supplierId INT NULL
  ,categoryId INT NULL
  ,quantityPerUnit VARCHAR(20) NULL
  ,unitPrice DECIMAL(10, 2) NULL
  ,unitsInStock SMALLINT NULL
  ,unitsOnOrder SMALLINT NULL
  ,reorderLevel SMALLINT NULL
  ,discontinued CHAR(1) NOT NULL
  ,PRIMARY KEY (productId)
  ,FOREIGN KEY (supplierId)
      REFERENCES Supplier(supplierId)
  ,FOREIGN KEY (categoryId)
      REFERENCES Category(categoryId)
  ) ENGINE=INNODB;

CREATE TABLE Shipper (
  shipperId INT AUTO_INCREMENT NOT NULL
  ,companyName VARCHAR(40) NOT NULL
  ,phone VARCHAR(44) NULL
  ,PRIMARY KEY (shipperId)
  ) ENGINE=INNODB;

CREATE TABLE SalesOrder (
  orderId INT AUTO_INCREMENT NOT NULL
  ,custId INT NOT NULL
  ,employeeId INT NULL
  ,orderDate DATETIME NULL
  ,requiredDate DATETIME NULL
  ,shippedDate DATETIME NULL
  ,shipperId INT NOT NULL
  ,freight DECIMAL(10, 2) NULL
  ,shipName VARCHAR(40) NULL
  ,shipAddress VARCHAR(60) NULL
  ,shipCity VARCHAR(15) NULL
  ,shipRegion VARCHAR(15) NULL
  ,shipPostalCode VARCHAR(10) NULL
  ,shipCountry VARCHAR(15) NULL
  ,PRIMARY KEY (orderId)
   , FOREIGN KEY (shipperId)
      REFERENCES Shipper(shipperId)
   ,FOREIGN KEY (custId)
      REFERENCES Customer(custId)
  ) ENGINE=INNODB;

CREATE TABLE OrderDetail (
   orderDetailId INT AUTO_INCREMENT NOT NULL,
   orderId INT NOT NULL
  ,productId INT NOT NULL
  ,unitPrice DECIMAL(10, 2) NOT NULL
  ,quantity SMALLINT NOT NULL
  ,discount DECIMAL(10, 2) NOT NULL
  ,PRIMARY KEY (orderDetailId)
  ,FOREIGN KEY (orderId)
      REFERENCES SalesOrder(orderId)
       ,FOREIGN KEY (productId)
      REFERENCES Product(productId)
  ) ENGINE=INNODB;

CREATE PROCEDURE SP_SHIPPER_SELLS_RELATORIO(shipperId int)
BEGIN
    SELECT count(*) as shipperSells, s.companyName FROM salesorder so join shipper s on s.shipperId = so.shipperId where so.shipperId = shipperId;
end;
INSERT INTO Shipper(shipperid, companyname, phone)
VALUES (1, N'Shipper GVSUA', N'(503) 555-0137');
