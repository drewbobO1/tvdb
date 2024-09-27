﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using tvdbAPI.Models;

#nullable disable

namespace tvdbAPI.Migrations
{
    [DbContext(typeof(TvDetailContext))]
    [Migration("20240927032833_New Data Model")]
    partial class NewDataModel
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.0-rc.1.24451.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("tvdbAPI.Models.TvDetail", b =>
                {
                    b.Property<int>("TvDetailId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("TvDetailId"));

                    b.Property<string>("ArtLink")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("FirstDayAired")
                        .IsRequired()
                        .HasColumnType("nvarchar(11)");

                    b.Property<string>("Network")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("nvarchar(11)");

                    b.Property<string>("Summary")
                        .IsRequired()
                        .HasColumnType("nvarchar(500)");

                    b.Property<string>("TvTitle")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("TvDetailId");

                    b.ToTable("TvDetails");
                });
#pragma warning restore 612, 618
        }
    }
}
