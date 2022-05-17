bool isPrimeNaive(int N) {
    if (N < 2)
        return false;
    for (int i = 2; i <= N / 2; i++) {
        if (N % i == 0)
            return false;
    }
    return true;
}