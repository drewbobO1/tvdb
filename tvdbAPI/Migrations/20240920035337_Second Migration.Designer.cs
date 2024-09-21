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
    [Migration("20240920035337_Second Migration")]
    partial class SecondMigration
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
                    b.Property<int>("TvId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("TvId"));

                    b.Property<string>("ArtLink")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("EndYear")
                        .IsRequired()
                        .HasColumnType("nvarchar(4)");

                    b.Property<string>("EpisodeQty")
                        .IsRequired()
                        .HasColumnType("nvarchar(3)");

                    b.Property<string>("EpisodeRuntime")
                        .IsRequired()
                        .HasColumnType("nvarchar(10)");

                    b.Property<string>("StartYear")
                        .IsRequired()
                        .HasColumnType("nvarchar(4)");

                    b.Property<string>("TvTitle")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("TvId");

                    b.ToTable("TvDetails");
                });
#pragma warning restore 612, 618
        }
    }
}
