const generateRandomLetter = () => {
  const alphabet = "abcdefghjklmnopqrstwy";
      const letters = [];
  
      for (let i = 1; i <= 3; i++) {
          const randomIndex = Math.floor(Math.random() * alphabet.length);
          letters.push(alphabet[randomIndex])
      }
      return letters
}

export default  generateRandomLetter