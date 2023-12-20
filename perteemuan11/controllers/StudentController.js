class StudentController {
    index(req,res){
        const data = {
            message: "menampilkan semua data student",
            data: [],
        };
        res.json(data);
    }

    store(req,res){
        const {nama} = req.body;
        
        const data = {
            message: `Menambahkan data student: ${nama}`,
            data: [],
        };
        res.json (data);
    }

    update(req,res){
        const {id} = req.parms;
        const {nama} = req.body;

        const data = {
            message: `Mengedit student id ${id}, nama ${nama}`,
        }
        res.json (data);
    }

    destroy(req,res){
        const {id} =req.parms;
        
        const data = {
            message:`menghapus student id ${id}`,
            data:[],
        }
        res.json(data);
    }

}

const object = new StudentController();

module.exports = object;
