export const API_URLS = {
      saveSentEmail: {
             endpoint: 'save',
             method: 'POST',
      },
      
      getemailFromType: {
            endpoint: 'emails',
            method: 'GET'
      },
      saveDraftEmails: {
            endpoint: 'save-draft',
            method: 'POST',
      }, 

      moveEmailsToBin: {
            endpoint: 'bin',
            method: 'POST',
      },
      toggleStarredEmail: {
            endpoint: 'starred',
            method: 'POST'
      }, 
      deleteEmail: {
            endpoint: 'delete', 
            method: 'DELETE'
      }

}