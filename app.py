from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Store subscribed emails (in a real app, this would be in a database)
subscribed_emails = set()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/how-it-works')
def how_it_works():
    return render_template('how-it-works.html')

@app.route('/shop')
def shop():
    return render_template('shop.html')

@app.route('/subscribe-newsletter', methods=['POST'])
def subscribe_newsletter():
    email = request.form.get('email')
    if not email:
        return jsonify({'success': False, 'message': 'Email is required'}), 400
    
    # In a real application, you would:
    # 1. Validate email format
    # 2. Store in a database
    # 3. Send confirmation email
    # 4. Handle duplicates properly
    
    if email in subscribed_emails:
        return jsonify({'success': False, 'message': 'Email already subscribed'}), 400
    
    subscribed_emails.add(email)
    return jsonify({
        'success': True, 
        'message': 'Successfully subscribed to newsletter!'
    })

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404
