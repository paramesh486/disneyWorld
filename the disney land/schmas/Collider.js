// Registering component in Collider.js
AFRAME.registerComponent("trees", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `hurdle${i}`;

      //position variables
      var posX = 20;
      var posY = -25;
      var posZ = -100;

      var position = { x: posX, y: posY, z: posZ };

      //call the function
      this.flyingBirds(id, position);
    }
  },
  flyingBirds: (id, position) => {
    //Get the terrain element
    var terrainEl = document.querySelector("#terrain");

    //creating the bird model entity
    var birdEl = document.createElement("a-entity");

    //Setting multiple attributes
    birdEl.setAttribute("id", id);

    birdEl.setAttribute("position", position);
    birdEl.setAttribute("scale", { x: 0.1, y: 0.1, z: 0.1});

    birdEl.setAttribute("gltf-model", "./tree/scene.gltf");

    //animated models
   // birdEl.setAttribute("animation-mixer", {});

    //append the bird entity as the child of the terrain entity
    terrainEl.appendChild(birdEl);
  }
});


