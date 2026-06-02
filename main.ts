let alumnos = [
        "Sofia", "Valentina", "Martina", "Emma",
            "Catalina", "Julieta", "Olivia", "Mia",
                "Lola", "Camila", "Isabella", "Lucia",
                    "Mateo", "Benjamin", "Thiago", "Joaquin",
                        "Tomas", "Felipe", "Santino", "Valentino",
                            "Bautista", "Lautaro", "Franco", "Bruno",
                                "Lucas", "Agustin", "Dylan", "Nicolas"
                                ]

                                let presentes: string[] = []
                                let ausentes: string[] = []

                                game.splash("BIENVENID@S")
                                game.splash("Estamos listos")
                                game.splash("para tomar asistencia")

                                for (let alumno of alumnos) {

                                    let respuesta = game.ask(
                                            alumno,
                                                    "A=PRESENTE B=AUSENTE"
                                                        )

                                                            if (respuesta) {
                                                                    presentes.push(alumno)
                                                                            game.splash("BIENVENID@", alumno)
                                                                                } else {
                                                                                        ausentes.push(alumno)
                                                                                            }
                                                                                            }

                                                                                            game.splash(
                                                                                                "Presentes: " + presentes.length
                                                                                                )

                                                                                                game.splash(
                                                                                                    "Ausentes: " + ausentes.length
                                                                                                    )

                                                                                                    if (ausentes.length > 0) {

                                                                                                        game.splash(
                                                                                                                "Hoy no vinieron"
                                                                                                                    )

                                                                                                                        for (let nombre of ausentes) {
                                                                                                                                game.splash(nombre)
                                                                                                                                    }

                                                                                                                                    } else {

                                                                                                                                        game.splash(
                                                                                                                                                "Asistencia perfecta"
                                                                                                                                                    )

                                                                                                                                                    }

                                                                                                                                                    game.splash("Fin")