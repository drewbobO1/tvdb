using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace tvdbAPI.Migrations
{
    /// <inheritdoc />
    public partial class FifthMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TvTitle",
                table: "TvDetails",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "ArtLink",
                table: "TvDetails",
                newName: "ArtworkUrl");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Title",
                table: "TvDetails",
                newName: "TvTitle");

            migrationBuilder.RenameColumn(
                name: "ArtworkUrl",
                table: "TvDetails",
                newName: "ArtLink");
        }
    }
}
