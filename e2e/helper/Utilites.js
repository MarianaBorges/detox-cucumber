class Utilitites {
    async sleep(milliceconds){
        return new Promise(resolve => setTimeout(resolve, milliceconds))
    }
}

export default new Utilitites();