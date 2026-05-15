(() => {

    function getMovieById(movieId?: string) {
        console.log({ movieId });
    }

    function getMovieActors(movieId: string) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBio(ActorId: string) {
        console.log({ ActorId });
    }

    // Crear una película
    function createMovie(movie: { title: string, description: string, rating: number, cast: string[] }) {
        console.log({ title: movie.title, description: movie.description, rating: movie.rating, cast: movie.cast });
    }

    // Crea un nuevo actor
    function createActor(actor: { fullName: string, birthdate: Date }): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (checkActorExists(actor.fullName)) return false;

        console.log('Crear actor');
        return true;

    }

    function checkActorExists(fullName: string): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return true;
        return false;
    }


    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if (isDead) {
            result = 1500;
        } else {
            if (isSeparated) {
                result = 2500;
            } else {
                if (isRetired) {
                    result = 3000;
                } else {
                    result = 4000;
                }
            }
        }

        return result;
    }




})();




