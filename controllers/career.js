import Career from "../models/Career.js";

export const createCareer = async (req, res) => {
  const newCareer = new Career(req.body);

  try {
    const savedCareer = await newCareer.save();
    res.status(200).json(savedCareer);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const updateCareer = async (req, res) => {
  try {
    const updatedCareer = await Career.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true } 
    );
    res.status(200).json(updatedCareer);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const deleteCareer = async (req, res) => {
  try {
    await Career.findByIdAndDelete(req.params.id),
      res.status(200).json("Career has been deleted");
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const getCareer = async (req, res) => {
  try {
    const career = await Career.findById(req.params.id);
    res.status(200).json(career);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const getCareers = async (req, res) => {
  try {
    const careers = await Career.find();
    res.status(200).json(careers);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

