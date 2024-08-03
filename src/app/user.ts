export class User {
  idUser!: number; // Non-null assertion
  nom: string = '';
  prenom: string = '';

  constructor(idUser?: number, nom?: string, prenom?: string) {
    if (idUser !== undefined) this.idUser = idUser;
    if (nom) this.nom = nom;
    if (prenom) this.prenom = prenom;
  }
}
