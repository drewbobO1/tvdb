using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace tvdbAPI.Migrations
{
    /// <inheritdoc />
    public partial class FirstMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TvDetails",
                columns: table => new
                {
                    TvId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TvTitle = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    ArtLink = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    EpisodeQty = table.Column<string>(type: "nvarchar(3)", nullable: false),
                    EpisodeRuntime = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    StartYear = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    EndYear = table.Column<string>(type: "nvarchar(4)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TvDetails", x => x.TvId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TvDetails");
        }
    }
}
