using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace tvdbAPI.Migrations
{
    /// <inheritdoc />
    public partial class ThirdMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TvId",
                table: "TvDetails",
                newName: "TvDetailId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "TvDetailId",
                table: "TvDetails",
                newName: "TvId");
        }
    }
}
