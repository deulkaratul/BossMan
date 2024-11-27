using System.Text.Json.Serialization;

namespace UserApi.Models;

public class User{

[JsonPropertyName("name")]
public string? Name {get;set;}

[JsonPropertyName("city")]
public string? City {get;set;}

[JsonPropertyName("dob")]
public DateTime DateOfBirth {get;set;}

[JsonPropertyName("salary")]
public int Salary {get;set;}

[JsonPropertyName("id")]
public int Id {get;set;}

}