app.get('/api/dashboard', (req, res) => {
    const userRole = req.query.role || 'Explorer';
    
    // Customize the data for guests vs members
    const responseData = { ...dashboardData };
    if (userRole === 'Explorer') {
        responseData.user.name = "Guest Student";
        responseData.user.rank = "Limited Access";
        // Maybe hide some advanced paths for guests
    }
    
    res.json(responseData);
});