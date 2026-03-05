using System; // 1. Usings primeiro

namespace MyApp; // 2. Namespace uma única vez

// 3. Suas classes
public class Grade
{
    public Grade(double firstGrade, double secondGrade, double thirdGrade)
    {

        
        FirstGrade = firstGrade;
        SecondGrade = secondGrade;
        ThirdGrade = thirdGrade;
    }

    public double FirstGrade { get; private set; }
    public double SecondGrade { get; private set; }
    public double ThirdGrade { get; private set; }

    public double Average()
    {
        var numbers = new double[] { FirstGrade, SecondGrade, ThirdGrade };
        var result = (numbers[0] + numbers[1] + numbers[2]) / numbers.Length;
        return result;
    }

    public void AddValues()
    {
        
    }
}

internal class Program
{
    static void Main(string[] args)
    {
        var nota = new Grade(7, 8, 10);
        Console.WriteLine(nota.Average()); // Resultado: 8.333333333333334
    }
}