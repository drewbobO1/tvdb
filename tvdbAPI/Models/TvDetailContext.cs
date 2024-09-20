using Microsoft.EntityFrameworkCore;

namespace tvdbAPI.Models;

public class TvDetailContext:DbContext
{
    public TvDetailContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<TvDetail> TvDetails { get; set; }
}