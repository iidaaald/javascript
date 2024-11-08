const numCandidates = Number(prompt("Enter the number of candidates:"));
const candidates = [];

for (let i = 1; i <= numCandidates; i++) {
  const candidateName = prompt(`Name for candidate ${i}:`);
  candidates.push({ name: candidateName, votes: 0 });
}

const numVoters = Number(prompt("Enter the number of voters:"));

for (let i = 1; i <= numVoters; i++) {
  const vote = prompt(`Voter ${i}, who do you vote for?`);

  let found = false;
  for (let j = 0; j < candidates.length; j++) {
    if (candidates[j].name.toLowerCase() === vote.toLowerCase()) {
      candidates[j].votes += 1;
      found = true;
      break;
    }
  }

  if (!found) {
    console.log("Empty or invalid vote counted as no vote.");
  }
}

candidates.sort((a, b) => b.votes - a.votes);

const winner = candidates[0];
console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
console.log("Results:");
for (let i = 0; i < candidates.length; i++) {
  console.log(`${candidates[i].name}: ${candidates[i].votes} votes`);
}
