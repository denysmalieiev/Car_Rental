import { NextFunction, Request, Response } from 'express';
import fileUpload from 'express-fileupload';

// Middleware to parse JSON or URL-encoded request bodies
export const parseJsonOrUrlEncoded = (req: Request, res: Response, next: NextFunction) => {
    req.body = req.body || {}; // Ensure req.body exists even if empty

    // Attempt to parse stringified JSON if content-type is appropriate
    if (req.is('json') || req.is('application/json')) {
        try {
            req.body = JSON.parse(req.body as string); // Parse stringified JSON
        } catch (error) {
            // Handle parsing errors (e.g., invalid JSON format)
            console.error('Error parsing JSON request body:', error);
            return next(new Error('Invalid JSON request body'));
        }
    }
    // Proceeding to the handler function
    next();
};

// Middleware to handle file uploads (image or other files)
export const handleData = (req: Request, res: Response, next: NextFunction) => {
    // Configure options for allowed file types, size limits, etc. (optional)
    const uploadOptions = {
      limits: { fileSize: 5000000 }, // Allow files up to 5MB (adjust as needed)
      useTempFiles: true // Use temporary files for larger uploads
    };
  
    fileUpload(uploadOptions)(req, res, (err) => {
      if (err) {
        // Handle upload errors
        return next(err);
      }
  
      // Check for uploaded files
      const uploadedFiles = req.files;
  
      // Check for form data (optional, based on your API design)
      const formData = req.body || {}; // Ensure formData is an object even if empty
  
      // Handle empty requests or missing data gracefully
      if (!uploadedFiles && !Object.keys(formData).length) {
        // Send appropriate response (e.g., 400 Bad Request, informative message)
        return res.status(400).send('No data provided in request');
      }
    // Proceeding to handler function   
      next();
    });
  };
