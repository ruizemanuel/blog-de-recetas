export class Receta {
   constructor(parametroId, parametroTitulo, parametroDesc, parametroImg) {
      this.id = parametroId
      this.titulo = parametroTitulo;
      this.desc = parametroDesc;
      this.img = parametroImg;
   }

   //getters y setters

   get mostrarId() {
      return this.id;
   }

   get mostrarTitulo() {
      return this.titulo;
   }

   get mostrarDesc() {
      return this.desc;
   }

   get mostrarImg() {
      return this.img;
   }


   set modificarId(id) {
      this.id = id;
   }

   set modificarTitulo(titulo) {
      this.titulo = titulo;
   }

   set modificarDesc(desc) {
      this.desc = desc;
   }

   set modificarImg(img) {
      this.img = img;
   }


};