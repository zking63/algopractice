function threesfives ()
{
    for (n = 100; n < 4000001; n + 3)
    {
        if ((n / 3 == int || n / 5 == int) && (n / 3 !== int && n /5 == int || n / 3 == int && n / 5 !== int))
        {
            factorial (n)
            console.log(n)
        }
    }
}