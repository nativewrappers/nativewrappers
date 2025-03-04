export enum OrphanMode {
  // Default, this will delete the entity when it isn't relevant to any players
  // NOTE: this *doesn't* mean when they're no longer in scope
  DeleteWhenNotRelevant = 0,
  // The entity will be deleted whenever its original owner disconnects
  // NOTE: if this is set when the entities original owner has already left it will be
  // marked for deletion (similar to just calling DELETE_ENTITY)
  DeleteOnOwnerDisconnect = 1,
  // The entity will never be deleted by the server when it does relevancy checks
  // you should only use this on entities that need to be relatively persistent
  KeepEntity = 2,
}
