USE [master]
GO

/****** Object:  Database [TNT]    Script Date: 8/22/2017 4:08:44 PM ******/
CREATE DATABASE [TNT]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'TNT', FILENAME = N'/var/opt/mssql/data/TNT.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'TNT_log', FILENAME = N'/var/opt/mssql/data/TNT_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [TNT].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [TNT] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [TNT] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [TNT] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [TNT] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [TNT] SET ARITHABORT OFF 
GO

ALTER DATABASE [TNT] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [TNT] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [TNT] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [TNT] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [TNT] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [TNT] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [TNT] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [TNT] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [TNT] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [TNT] SET  ENABLE_BROKER 
GO

ALTER DATABASE [TNT] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [TNT] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [TNT] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [TNT] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [TNT] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [TNT] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [TNT] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [TNT] SET RECOVERY FULL 
GO

ALTER DATABASE [TNT] SET  MULTI_USER 
GO

ALTER DATABASE [TNT] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [TNT] SET DB_CHAINING OFF 
GO

ALTER DATABASE [TNT] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [TNT] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [TNT] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [TNT] SET  READ_WRITE 
GO

USE [TNT]
GO

/****** Object:  Table [dbo].[Nitro]    Script Date: 8/22/2017 4:08:14 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Nitro](
	[id] [bigint] IDENTITY(100,1) NOT NULL,
	[name] [nvarchar](50) NULL,
	[level] [int] NULL
) ON [PRIMARY]

CREATE TABLE [dbo].[Prize](
	[id] [bigint] IDENTITY(100,1) NOT NULL,
	[nitroId] [bigint] NOT NULL,
	[type] [nvarchar](50) NULL,
	[reward] [int] NULL
) ON [PRIMARY]


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE lookupPrizeTypeByName
	@name NVARCHAR(50)

AS
BEGIN
	SET NOCOUNT ON;
	SELECT Prize.Type 
	FROM Prize
	JOIN Nitro
	ON Nitro.id = Prize.nitroId
    WHERE Nitro.name = @name
END
GO

USE [TNT]
GO

INSERT INTO [dbo].[Nitro]
           ([name]
           ,[level])
     VALUES
           ('Alfred'
           ,100)

INSERT INTO [dbo].[Nitro]
			([name]
			,[level])
	VALUES
			('Obama'
			,1000)
INSERT INTO [dbo].[Prize]
           ([nitroId]
           ,[type]
           ,[reward])
     VALUES
           (100
           ,'Creater'
           ,1000000000)

 INSERT INTO [dbo].[Prize]
           ([nitroId]
           ,[type]
           ,[reward])
     VALUES
           (101
           ,'Peace'
           ,1000000)

GO