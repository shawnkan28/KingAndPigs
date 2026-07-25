export function moveAndCollide(entity, dt, collidables) {
  entity.y += entity.vy * dt;
  const hitY = stopCollide(entity, collidables, "y");
  if (hitY === "ground") return { hitGround: true };
  else return { hitGround: false };
}

// AABB intersection: true if the two rects overlap at all (edges included).
// Best for blocking/physics ("am I touching it?").
function detectCollision(player, obj){
    return (
        player.x < obj.x + obj.w &&
        player.x + player.w > obj.x &&
        player.y < obj.y + obj.h &&
        player.y + player.h > obj.y
    );
}

function stopCollide(entity, collidables, axis) {
  const bounds = entity.getCollisionBounds();
  let hit = "";

  for (const collide of collidables) {
    if (collide === entity) continue;
    const other = {
      x: collide.x,
      y: collide.y,
      w: collide.w,
      h: collide.h,
    };

    // No Collision, Skip!
    if(!detectCollision(bounds, other)) continue;

    // Checking y axis for collision
    if(axis === "y"){
        if(entity.vy > 0){
            entity.y -= bounds.y + bounds.h - other.y;
            hit = "ground";
        } else if (entity.vy < 0){
            entity.y += other.y + other.h - bounds.y;
        } else {
            // edge cases
        }
        entity.vy = 0;
        Object.assign(bounds, entity.getCollisionBounds());
    }
  }
  return hit;
}
