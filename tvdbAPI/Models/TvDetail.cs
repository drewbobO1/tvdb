using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace tvdbAPI.Models;

public class TvDetail
{
    [Key] 
    public int TvDetailId { get; set; }

    [Column(TypeName = "nvarchar(100)")]
    public string TvTitle { get; set; } = "";

    [Column(TypeName = "nvarchar(100)")]
    public string ArtLink { get; set; } = "";

    [Column(TypeName = "nvarchar(3)")]
    public string EpisodeQty { get; set; } = "";

    [Column(TypeName = "nvarchar(10)")]
    public string EpisodeRuntime { get; set; } = "";

    [Column(TypeName = "nvarchar(4)")]
    public string StartYear { get; set; } = "";

    [Column(TypeName = "nvarchar(4)")]
    public string EndYear { get; set; } = "";
}