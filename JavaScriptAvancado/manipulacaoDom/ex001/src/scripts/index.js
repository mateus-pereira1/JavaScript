const apiBaseUrl = "https://api.github.com/orgs/facebook/repos";

const pageSize = 10;

let page = 1;

let canFetch = true;

const reposContainer = document.getElementById('repos-container');

reposContainer.addEventListener('scroll', handleScroll);

function createUrl(){
    const url = new URL(apiBaseUrl);
    url.searchParams.set('par_page', pageSize);
    url.searchParams.set('page', page);

    return url;
}

async function createReposContainer() {
    const url = createUrl();
    canFetch = false;


try{
    const response = await fetch(url);
    const repos = await response.json();

    const parent = document.createDocumentFragment();

    for(let repo of repos){
        const p = document.createElement("p");
        p.textContent = repo.name;
        p.className = "repository";

        parent.appendChild(p);

        canFetch = true;
    }

    page += 1;

    reposContainer.appendChild(parent);

} catch(e){
    console.log("Error", e)
}
}



function handleScroll(){
    if(!canFetch){
        return;
    }

    const bottomSpaceLeftToScroll = this.scrollHeight - this.scrollTop - this.clientHeight;

    if(bottomSpaceLeftToScroll > 0 ) return;
    createReposContainer();
}

createReposContainer();
