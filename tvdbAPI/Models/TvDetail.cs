using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace tvdbAPI.Models;

public class TvDetail
{
    [Key] 
    public int TvDetailId { get; set; }

    [Column(TypeName = "nvarchar(100)")]
    public string TvTitle { get; set; } = "";
    
    [Column(TypeName = "nvarchar(50)")]
    public string Network { get; set; } = "";

    [Column(TypeName = "nvarchar(11)")]
    public string Status { get; set; } = "";

    [Column(TypeName = "nvarchar(500)")]
    public string Summary { get; set; } = "";

    [Column(TypeName = "nvarchar(11)")]
    public string FirstDayAired { get; set; } = "";
    
    [Column(TypeName = "nvarchar(100)")]
    public string ArtLink { get; set; } = "";
}