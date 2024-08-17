const AbstractSeeder = require("./AbstractSeeder");
const CategorySeeder = require("./CategorySeeder");

class ProgramSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    //
    super({ table: "program", truncate: true, dependencies: [CategorySeeder] });
  }

  run() {
    const programs = [
      {
        title: "The Good Place",
        synopsis:
          "À sa mort, Eleanor Shellstrop est envoyée au Bon Endroit, un paradis fantaisiste réservé aux individus exceptionnellement bienveillants. Or Eleanor n'est pas exactement une « bonne personne » et comprend vite qu'il y a eu erreur sur la personne. Avec l'aide de Chidi, sa prétendue âme sœur dans l'au-delà, la jeune femme est bien décidée à se redécouvrir.",
        poster:
          "https://img.betaseries.com/JwRqyGD3f9KvO_OlfIXHZUA3Ypw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F94857341d71c795c69b9e5b23c4bf3e7.jpg",
        country: "USA",
        year: 2016,
        // category_id: ???
        category_id: this.getRef("category_Comédie").insertId,
      },
      {
        title: "Dark",
        synopsis:
          "Quatre familles affolées par la disparition d'un enfant cherchent des réponses et tombent sur un mystère impliquant trois générations qui finit de les déstabiliser.",
        poster:
          "https://img.betaseries.com/zDxfeFudy3HWjxa6J8QIED9iaVw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fc47135385da176a87d0dd9177c5f6a41.jpg",
        country: "Allemagne",
        year: 2017,
        // category_id: ???
        category_id: this.getRef("category_Science-Fiction").insertId,
      },
      {
        title: "Grey's Anatomy",
        synopsis:
          "Un drame médical et romantique centré sur Meredith Grey, une aspirante chirurgienne et fille de l'un des meilleurs chirurgiens, le Dr Ellis Grey. Tout au long de la série, Meredith fait face à des défis professionnels et personnels aux côtés de ses collègues chirurgiens du Seattle Grace Hospital.",
        poster:
          "https://m.media-amazon.com/images/I/81N7JUtpk9L._AC_UF1000,1000_QL80_.jpg",
        country: "USA",
        year: 2005,
        // category_id: ???
        category_id: this.getRef("category_Médical").insertId,
      },
      {
        title: "Lupin, Dans l'ombre d'Arsène",
        synopsis:
          "En 1995, le jeune Assane Diop est bouleversé par le suicide de son père, accusé d'un vol qu'il n'a pas commis. Vingt-cinq ans plus tard, Assane organise le vol d'un collier ayant appartenu à Marie-Antoinette d'Autriche. Le bijou, aujourd'hui exposé au musée du Louvre, appartenait à la riche famille Pellegrini. Il veut se venger de cette famille ayant accusé à tort son père, en s'inspirant de son personnage fétiche : le « gentleman cambrioleur » Arsène Lupin, utilisant la science de ce personnage aux multiples facettes imaginé par Maurice Leblanc pour échapper à la police. En parallèle de ses activités illégales, Assane tente également de s'occuper davantage de son fils Raoul, qui vit aujourd'hui avec son ex-petite amie Claire.",
        poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5p1wcvkv4fC3Im_6E6kEMb-tjGNTMMXsehyN-F7iTm07kVtwf6qFN16f7M9JVwEQtAk&usqp=CAU",
        country: "France",
        year: 2021,
        // category_id: ???
        category_id: this.getRef("category_Action").insertId,
      },
    ];

    programs.forEach((program) => {
      this.insert(program); // insert into program(title, synopsis, poster, country, year, category_id) values (?, ?, ?, ?, ?, ?)
    });
  }
}

// Export the ProgramSeeder class
module.exports = ProgramSeeder;
