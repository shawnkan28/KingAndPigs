const GRAVITY = 2000;

const MAX_FALL_SPEED = 900;

const JUMP_SPEED = -520;

export function applyGravity(entity, dt, options = {}) {
  const gravity = options.gravity ?? GRAVITY;
  const maxFallSpeed = options.maxFallSpeed ?? MAX_FALL_SPEED;

  entity.vy += gravity * dt;
  if (entity.vy > maxFallSpeed) entity.vy = maxFallSpeed;
}
