
let Guest_List :string[] = ['Hammad Rind Balouch', 'Yasir Shaikh', 'Kifayat Ali Jafri'];
// for(let i=0; i<Guest_List.length; i++){
    
   // console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')}


let absent_Guest :string = 'Hammad Rind Balouch' ;
let new_Guest :string = 'Faraz Khan' ;
Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){
    
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

}

console.log(`Mr. ${absent_Guest} is not coming to the party.`);

console.log('Good News! we find Big Table so we are inviting 3 more guests.')

Guest_List.unshift('Noman ghori');
Guest_List.splice(2 , 0 , 'Raheel Khan');
Guest_List.push('Faiz uddin shaikh');

for(let i=0; i<Guest_List.length; i++){
    
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')

}