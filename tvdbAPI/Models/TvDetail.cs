using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace tvdbAPI.Models;

public class TvDetail
{
    [Key] 
    public int TvId { get; set; }

    [Column(TypeName = "nvarchar(100)")]
    public string TvTitle { get; set; } = "";

    [Column(TypeName = "nvarchar(100)")]
    public string ArtLink { get; set; } = "";

    [Column(TypeName = "nvarchar(3)")]
    public int EpisodeQty { get; set; }

    [Column(TypeName = "nvarchar(10)")]
    public int EpisodeRuntime { get; set; }

    [Column(TypeName = "nvarchar(4)")]
    public int StartYear { get; set; }

    [Column(TypeName = "nvarchar(4)")]
    public int EndYear { get; set; }
}