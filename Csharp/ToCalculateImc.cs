namespace MyApp;

public class Imc
{
    public Imc(double weight, double height)
    {
        if (weight == 0 || height == 0)
            throw new Exception("O valor não pode ser zero");

        Weight = weight;
        Height = height;
    }

    public double Weight { get; set; }
    public double Height { get; set; }

    public double ToCalculate()
    {
        return Weight/(Height*Height);
    }
}