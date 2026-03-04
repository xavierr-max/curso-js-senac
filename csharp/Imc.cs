namespace Imc;

public class Imc
{
    public Imc(int weight, int height)
    {
        Weight = weight;
        Height = height;
    }

    public int Weight { get; set; }
    public int Height { get; set; }

    public int ToCalculate()
    {
        Weight * (Height*Height);
    }
}