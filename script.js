const byteSize = (str) => {
  // write your code here
	const blobData=new Blob([str]);
	return  blobData.size;
	
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
