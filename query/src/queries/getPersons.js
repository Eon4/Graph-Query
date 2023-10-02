export const getPersons = `
query AllPeople {
    allPeople {
      people {
        name
        homeworld {
          name
          gravity
        }
        birthYear
        filmConnection {
          films {
            title
          }
        }
      }
    }
  }

`;