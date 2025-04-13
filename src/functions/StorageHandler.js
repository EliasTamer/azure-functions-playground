const { app } = require('@azure/functions');

app.storageBlob('StorageHandler', {
    path: 'images/{name}',
    connection: 'STORAGE_CONNECTION_STRING',
    handler: (blob, context) => {
        context.log(`Storage blob function processed blob "${context.triggerMetadata.name}" with size ${blob.length} bytes`);
    }
});
