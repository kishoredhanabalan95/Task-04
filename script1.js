var request = new XMLHttpRequest ();
request.open('GET','https://documenter.getpostman.com/view/10808728/SzS8rjbc',true );
request.send();
request.onload = function()
{
    var data = JSON.parse(this.response); 
console.log(data);
}