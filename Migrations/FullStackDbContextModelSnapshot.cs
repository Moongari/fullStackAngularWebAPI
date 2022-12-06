﻿// <auto-generated />
using System;
using FullStackAPI.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace FullStackAPI.Migrations
{
    [DbContext(typeof(FullStackDbContext))]
    partial class FullStackDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.11");

            modelBuilder.Entity("FullStackAPI.Models.Budget", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<double>("amount")
                        .HasColumnType("REAL");

                    b.Property<string>("categories")
                        .HasColumnType("TEXT");

                    b.Property<string>("dateDepenses")
                        .HasColumnType("TEXT");

                    b.Property<bool>("mandatory")
                        .HasColumnType("INTEGER");

                    b.Property<string>("name")
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("budgets");
                });

            modelBuilder.Entity("FullStackAPI.Models.Solde", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<double>("amount")
                        .HasColumnType("REAL");

                    b.Property<DateTime>("dateSolde")
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("solde");
                });
#pragma warning restore 612, 618
        }
    }
}
