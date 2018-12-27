const config = {
  production:{
      LINKEDIN_CLIENT_ID: process.env.LCLIENTID,
      LINKEDIN_CLIENT_SECRET: process.env.LCLIENTSECRET,
      LINKEDIN_REDIRECT_URL: `http://localhost:3001/linkedin/auth`,
      TORREBIO_TOKEN: "1-208e09b7d0894d46977c76d48bf99b4d831365ba-1-DtPtwCSQ10ctk7PavUzwU0kaGQaJDnqotSHWVVmxLrjydlWRrQO/pFQ4JGAjNYMCjrFfvUzHcxutZmdE84hZS9Ja3jkXrfPKSglf9YIYea2qJ5blq6fJkYCWl4S/Jzp79kGxDgZxXKPN57XwTyKEvOdeUfEsmbsSTFJkVvM9iRO/owMqpjqpHVxdC4e8b2DNnofirxO6/RsIv8m+op1sTzEqNrI7g1j+a2mkddDGhMN4jyRrMASehJvfYbcwszv4119t4KqGuVows3qNI7ey3sTMH+CVrrErc/aodohVDrqYzf4ljQwm4Ubdtng/TTtjL9gn7P5dIe6GrSAO4sPP3BgmfQBwgNG5A6gmcNDRL+C9HvXbV6LaY5rBtnDJ33gKuwuv2152D9kgBViMvnmeIIwgwjinKOGQWbAHuIPt15olxEyqHYyWWzbXx7kYo8wG6QSyx8hWetBKVyYsBw2rdj5n1bukXGAwRFA18TpROe/uN94cpqFrE1pGe47Az/McCnQO/BtHxdoYqiE2mRA5rTBq/mEtn8zJ//VM+p7wIWIAfoSZ7CjyOuXqyoADqVtz3ShZTEfoy71PETYgtrlYGIYpnrC2naKlgqlmC7ztiuEYRFpDp1rFE9za3Bo2uEQwOZtUTLg1AdXZzAClr+XUsaxjPcgNuFpAoTfu2hrv",
      SERVER_PORT: process.env.SERVER_PORT || 3001
  },
  default:{
      LINKEDIN_CLIENT_ID: '78s8t0db8vcjsk',
      LINKEDIN_CLIENT_SECRET: 'DBe7yKyda0zRvrHj',
      LINKEDIN_REDIRECT_URL: 'http://localhost:3001/linkedin/auth',
      TORREBIO_TOKEN: "1-208e09b7d0894d46977c76d48bf99b4d831365ba-1-DtPtwCSQ10ctk7PavUzwU0kaGQaJDnqotSHWVVmxLrjydlWRrQO/pFQ4JGAjNYMCjrFfvUzHcxutZmdE84hZS9Ja3jkXrfPKSglf9YIYea2qJ5blq6fJkYCWl4S/Jzp79kGxDgZxXKPN57XwTyKEvOdeUfEsmbsSTFJkVvM9iRO/owMqpjqpHVxdC4e8b2DNnofirxO6/RsIv8m+op1sTzEqNrI7g1j+a2mkddDGhMN4jyRrMASehJvfYbcwszv4119t4KqGuVows3qNI7ey3sTMH+CVrrErc/aodohVDrqYzf4ljQwm4Ubdtng/TTtjL9gn7P5dIe6GrSAO4sPP3BgmfQBwgNG5A6gmcNDRL+C9HvXbV6LaY5rBtnDJ33gKuwuv2152D9kgBViMvnmeIIwgwjinKOGQWbAHuIPt15olxEyqHYyWWzbXx7kYo8wG6QSyx8hWetBKVyYsBw2rdj5n1bukXGAwRFA18TpROe/uN94cpqFrE1pGe47Az/McCnQO/BtHxdoYqiE2mRA5rTBq/mEtn8zJ//VM+p7wIWIAfoSZ7CjyOuXqyoADqVtz3ShZTEfoy71PETYgtrlYGIYpnrC2naKlgqlmC7ztiuEYRFpDp1rFE9za3Bo2uEQwOZtUTLg1AdXZzAClr+XUsaxjPcgNuFpAoTfu2hrv",
      SERVER_PORT: 3001
  }
}

exports.get = function get(env){
  return config[env] || config.default
} 