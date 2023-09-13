import { Form, FormGroup, Button, Container } from "react-bootstrap";
import { useState } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import Swal from "sweetalert2";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    grade: "",
    parentsName: "",
    photo: null,
    amount: "",
    paymentDate: "",
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleDrop = (acceptedFiles) => {
    const image = acceptedFiles[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      photo: image,
    }));
    setPreviewImage(URL.createObjectURL(image));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, address, grade, parentsName, amount, paymentDate, photo } =
      formData;

    const formDataToUpload = new FormData();
    formDataToUpload.append("name", name);
    formDataToUpload.append("address", address);
    formDataToUpload.append("grade", grade);
    formDataToUpload.append("parentsName", parentsName);
    formDataToUpload.append("amount", amount);
    formDataToUpload.append("paymentDate", paymentDate);
    formDataToUpload.append("photo", photo);

    // if (photo) {
    //   formDataToUpload.append("photo", photo, photo.name);
    // }

    try {
      const response = await axios.post("/payments", formDataToUpload);
      console.log("Upload response", response.data);

      // show sweet alert on successful upload
      Swal.fire({
        icon: "success",
        title: "Entry created successfully",
        text: "Your form entry has been created",
        confirmButtonText: "Ok",
      });

      // Clear form fields after successful upload
      setFormData({
        name: "",
        address: "",
        grade: "",
        parentsName: "",
        photo: null,
        amount: "",
        paymentDate: "",
      });
      setPreviewImage(null);
    } catch (error) {
      // console.error("entry creation error", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error while payment",
      });
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center  ">
      <Form className="w-5" onSubmit={handleSubmit}>
        <FormGroup>
          <h2>Payment Section</h2> <Form.Label>Name</Form.Label>{" "}
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label>Grade</Form.Label>
          <Form.Control
            type="text"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label>Parents' Name</Form.Label>
          <Form.Control
            type="text"
            name="parentsName"
            value={formData.parentsName}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label>Photo</Form.Label>
          <Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <div className="dropzone-container" {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="dropzone-box">
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="Uploaded"
                      style={{ maxWidth: "100%", maxHeight: "200px" }}
                    />
                  ) : (
                    <p>Drag & drop a photo here or click to select one</p>
                  )}
                </div>
              </div>
            )}
          </Dropzone>
        </FormGroup>
        <FormGroup>
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label>Payment Date</Form.Label>
          <Form.Control
            type="date"
            name="paymentDate"
            value={formData.paymentDate}
            onChange={handleChange}
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default PaymentForm;
