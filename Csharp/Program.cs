using System;

namespace MyApp;

internal class Program
{
    static void Main(string[] args)
    {
        var teste = new Imc(0, 1.85);
        var result = teste.ToCalculate();

        Console.WriteLine(Math.Round(result, 2));
    }
}
