using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace tvdbAPI.Migrations
{
    /// <inheritdoc />
    public partial class NewDataModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EndYear",
                table: "TvDetails");

            migrationBuilder.DropColumn(
                name: "EpisodeQty",
                table: "TvDetails");

            migrationBuilder.DropColumn(
                name: "EpisodeRuntime",
                table: "TvDetails");

            migrationBuilder.DropColumn(
                name: "StartYear",
                table: "TvDetails");

            migrationBuilder.AddColumn<string>(
                name: "FirstDayAired",
                table: "TvDetails",
                type: "nvarchar(11)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Network",
                table: "TvDetails",
                type: "nvarchar(50)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "TvDetails",
                type: "nvarchar(11)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Summary",
                table: "TvDetails",
                type: "nvarchar(500)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FirstDayAired",
                table: "TvDetails");

            migrationBuilder.DropColumn(
                name: "Network",
                table: "TvDetails");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "TvDetails");

            migrationBuilder.DropColumn(
                name: "Summary",
                table: "TvDetails");

            migrationBuilder.AddColumn<string>(
                name: "EndYear",
                table: "TvDetails",
                type: "nvarchar(4)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "EpisodeQty",
                table: "TvDetails",
                type: "nvarchar(3)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "EpisodeRuntime",
                table: "TvDetails",
                type: "nvarchar(10)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "StartYear",
                table: "TvDetails",
                type: "nvarchar(4)",
                nullable: false,
                defaultValue: "");
        }
    }
}
