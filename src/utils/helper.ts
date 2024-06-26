export const formatDate = (dataString: any) => {
    const date = new Date(dataString);

    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${month} ${day}, ${year} at ${hours}:${minutes}:${seconds}`;
  };

  export const highestState = (steps:any) => {
    if (!steps || steps.length === 0) {
      return null; // or some default value
    }
  
    // Use reduce to find the highest state
    const highest = steps.reduce((max:any, item:any) => {
      return item.state > max ? item.state : max;
    }, steps[0].state);
  
    return highest;
  }

  export const generateUniqueFileName = (originalName: string) => {
    const timestamp = new Date().getTime();
    const randomString = Math.random().toString(36).substring(2, 15);
    const extension = originalName.split('.').pop();
    return `${timestamp}-${randomString}.${extension}`;
  };

  export  const generateRandomId = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomPart = "";
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomPart += characters[randomIndex];
    }
    const timestamp = Date.now().toString();
    return `t_id_${randomPart}${timestamp}`;
  };

  export function displaySubtitle(item:any) {
    const notes = item.notes || '';
    const content = item.content || [];
    
    const contentLinks = content.map((link:any) => 
      link ? `<a href="${link}">${link}</a>` : ''
    ).filter(Boolean).join('\n');
    
    return notes + (notes && contentLinks ? '\n' : '') + contentLinks;
  }